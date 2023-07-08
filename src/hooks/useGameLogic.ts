import { useEffect, useMemo, useState } from "react";
import { shuffle } from "../utils/main";
import { ICard, CardType, SelectedCardsAction } from "../types";
import { HIDE_DELAY, cardList, SOLVE_DELAY, TOTAL_STEPS } from "../appConfig";

interface ISelectedCards {
    first: ICard | null,
    second: ICard | null
}

interface IGameLogicReturn {
    cards: ICard[];
    stepMove: number;
    stepLeft: number;
    isWin: boolean | null;
    initGame: () => void;
    clickCardHandler: (currentCard: ICard) => void;
}

export const useGameLogic = (): IGameLogicReturn => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [isWin, setIsWin] = useState<boolean | null>(null);
    const [timer, setTimer] = useState<number | null>(null);
    const [stepMove, setStepMove] = useState<number>(0);
    const [totalPairsFound, setTotalPairsFound] = useState<number>(0);
    const [selectedCards, setSelectedCards] = useState<ISelectedCards>({
        first: null,
        second: null
    }) ;

    const stepLeft = useMemo(() => TOTAL_STEPS - stepMove, [stepMove]);

    /**
     * Обновляем карточку в общем массиве на карточку с новыми данными.
     * @param currentCard - карточка с изменёнными данными
     */
    const updateCard = (currentCard: ICard) => {
        setCards((cards) => {
            return cards.map((card) => {
                if (card.name === currentCard.name && card.type === currentCard.type) {
                    card = currentCard;
                }
                return card;
            })
        })
    };

    /**
     * Переворачиваем карточку рубашкой вверх
     * @param card - выбранная карта
     */
    const hideCard = (card: ICard) => {
        updateCard({
            ...card,
            isShowed: false
        });
    };

    /**
     * "Решаем" карточку. Удаляем её с поля
     * @param card
     */
    const solveCard = (card: ICard) => {
        updateCard({
            ...card,
            isSolved: true
        });
    };

    /**
     * Увеличиваем счётчик ходов
     */
    const updateStepCounter = (): void => {
        setStepMove((prevStepMove) => prevStepMove + 1);
    }

    /**
     * Скрываем всю пару карт и очищаем стейт + таймаут (если есть)
     * @param first - первая карточка
     * @param second - вторая карточка
     */
    const hideSelectedCards = (first: ICard, second: ICard) => {
        hideCard(first);
        hideCard(second);
        setSelectedCards({
            first: null,
            second: null
        });
        if (timer !== null) {
            window.clearTimeout(timer);
            setTimer(null);
        }
    }

    /**
     * "Решаем" всю пару карт и очищаем стейт
     * @param first - первая карточка
     * @param second - вторая карточка
     */
    const solveSelectedCards = (first: ICard, second: ICard) => {
        setTotalPairsFound((prevValue) => prevValue + 1);
        setSelectedCards({
            first: null,
            second: null
        });

        window.setTimeout(() => {
            solveCard(first);
            solveCard(second);
        }, SOLVE_DELAY);
    }

    /**
     * Проверяем выбранные карточки. Если они одинаковые - "решаем" их.
     * Иначе, запускаем таймер на их скрытие.
     * @param first - первая карточка
     * @param second - вторая карточка
     */
    const checkSelectedCards = (first: ICard, second: ICard) => {
        if (first.name === second.name) {
            invokeActionSelectedCards(first, second, SelectedCardsAction.SOLVE);
        } else {
            setTimer(
                window.setTimeout(() => invokeActionSelectedCards(first, second, SelectedCardsAction.HIDE), HIDE_DELAY)
            )
        }
    }

    /**
     * Действия над выбранными карточками
     * @param first - первая карточка
     * @param second - вторая карточка
     * @param action - действие из enum
     */
    const invokeActionSelectedCards = (first: ICard, second: ICard, action: SelectedCardsAction) => {
        switch (action) {
            case SelectedCardsAction.HIDE:
                hideSelectedCards(first, second);
                break;
            case SelectedCardsAction.SOLVE:
                solveSelectedCards(first, second);
                break;
            case SelectedCardsAction.CHECK:
                checkSelectedCards(first, second);
                break;
        }
    }

    /**
     * Метод обновления пары выбранных карт
     * @param currentCard - текущая выбранная карта
     */
    const updateSelectedCards = (currentCard: ICard) => {
        const { first, second } = selectedCards;
        if (first === null) {
            setSelectedCards((selectedCards) => ({ ...selectedCards, first: currentCard }));
        } else if (second === null) {
            setSelectedCards((selectedCards) => ({ ...selectedCards, second: currentCard }));

            invokeActionSelectedCards(first, currentCard, SelectedCardsAction.CHECK);
        }
    }

    /**
     * Основной обработчик нажатия на карточку
     * @param currentCard - теущая выбранная карта
     */
    const clickCardHandler = (currentCard: ICard) => {
        const { first, second } = selectedCards;
        if (first && second) {
            invokeActionSelectedCards(first, second, SelectedCardsAction.HIDE);
            setSelectedCards((selectedCards) => ({ ...selectedCards, first: currentCard }));
        }
        if (isWin === null) {
            const newCard = {
                ...currentCard,
                isShowed: true
            };
            updateCard(newCard);
            updateSelectedCards(newCard);
            updateStepCounter();
        }
    };

    /**
     * Инициализируем игру
     */
    const initGame = () => {
        setStepMove(0);
        setTotalPairsFound(0);
        setSelectedCards({
            first: null,
            second: null
        });
        setIsWin(null);
        setTimer(null);
        fillCardGrid();
    }

    /**
     * Заполняем сетку карточек контентом
     */
    const fillCardGrid = () => {
        setCards(
            shuffle<ICard>(cardList.reduce<ICard[]>((acc, value) => {
                acc.push(...[value, {...value, type: CardType.COPY}]);
                return acc;
            }, []))
        );
    };

    /**
     * Инициализируем данные для начала игры
     */
    useEffect(initGame, []);

    /**
     * Проверяем условие победы
     */
    useEffect(() => {
        if (totalPairsFound === cardList.length) {
            setIsWin(true);
        } else if (stepLeft === 0) {
            setIsWin(false);
        }
    }, [stepLeft, totalPairsFound]);

    return {
        cards,
        stepMove,
        stepLeft,
        isWin,
        initGame,
        clickCardHandler
    };
}
