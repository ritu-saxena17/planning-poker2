import { NON_NUMBER_CHOICE } from "./constants"
import coffee from '../src/assets/images/coffee.png'
import question from '../src/assets/images/question.png'

export const fibonacciSequence = (): number[] => {
	const list: number[] = []
	let index: number = 2
	list.push(1, 2)
	while (list.length < 7) {
		list.push(list[index - 1] + list[index - 2])
		index++
	}
	return list
}

export const generateNonNumberChoices = (): string[] => {
	const list: string[] = [NON_NUMBER_CHOICE.COFFEE, NON_NUMBER_CHOICE.NOT_SELECTED]
	return list
}

export const getCardImage = (choice: string): string => {
	switch (choice) {
		case NON_NUMBER_CHOICE.COFFEE:
			return coffee
		case NON_NUMBER_CHOICE.NOT_SELECTED:
			return question
		default: {
			const exhaustiveCheck: string = choice
			throw new Error(`Unhandled healthType type case: ${exhaustiveCheck}`);
		}
	}
}

