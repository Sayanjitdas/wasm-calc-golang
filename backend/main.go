package main

import (
	"fmt"
	"strconv"
	"strings"
	"syscall/js"
)

const ADD = "+"
const SUB = "-"
const MULT = "*"
const DIVIDE = "/"

var calculationList []string

func convert(element string) float64 {
	value, err := strconv.ParseFloat(element, 64)
	if err != nil {
		panic(err.Error())
	}
	return value
}

func ResetCalculationList() js.Func {

	return js.FuncOf(func(this js.Value, args []js.Value) any {
		calculationList = []string{}
		return nil
	})
}

func symbolCheck(element string) bool {
	switch element {
	case ADD:
		fallthrough
	case SUB:
		fallthrough
	case MULT:
		fallthrough
	case DIVIDE:
		return true
	}

	return false

}

func GetInput() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) any {
		if strings.Contains("1234567890", args[0].String()) {
			if len(calculationList)-1 >= 0 && !symbolCheck(calculationList[len(calculationList)-1]) {
				calculationList[len(calculationList)-1] = calculationList[len(calculationList)-1] + args[0].String()
			} else {
				calculationList = append(calculationList, args[0].String())
			}
		} else {
			calculationList = append(calculationList, args[0].String())
		}

		return nil
	})
}

func Calculate() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) any {
		var currValue, nextValue, result float64
		fmt.Println(calculationList)
		for i, elm := range calculationList {
			switch elm {
			case ADD:
				fmt.Println("ADDITION")
				result = currValue + nextValue
				currValue = result
			case SUB:
				fmt.Println("SUBTRACTION")
				result = currValue - nextValue
				currValue = result
			case MULT:
				fmt.Println("MULTIPLICATION")
				result = currValue * nextValue
				currValue = result
			case DIVIDE:
				fmt.Println("DIVISION")
				result = currValue / nextValue
				currValue = result
			default:
				currValue = convert(elm)
				nextNumberIndex := 2
				if i+nextNumberIndex < len(calculationList) {
					nextValue = convert(calculationList[i+nextNumberIndex])
				}
			}
		}

		fmt.Println("RESULT >>", result)
		calculationList = []string{fmt.Sprint(result)}

		return result
	})
}

func main() {
	channel := make(chan int)
	fmt.Println("Hello Web assembly!!")
	js.Global().Set("getNumber", GetInput())
	js.Global().Set("Calculate", Calculate())
	js.Global().Set("Reset", ResetCalculationList())
	<-channel
}
