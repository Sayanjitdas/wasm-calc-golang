const goWasm = new Go() // this Go class is from wasm_exec.js

WebAssembly.instantiateStreaming(fetch("main.wasm"),goWasm.importObject).then((result) => {
    goWasm.run(result.instance)

    document.querySelector("#numpad-0").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-0").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-0").innerHTML
    })
    document.querySelector("#numpad-1").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-1").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-1").innerHTML
    })
    document.querySelector("#numpad-2").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-2").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-2").innerHTML

    })
    document.querySelector("#numpad-3").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-3").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-3").innerHTML
    })
    document.querySelector("#numpad-4").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-4").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-4").innerHTML
    })
    document.querySelector("#numpad-5").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-5").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-5").innerHTML
    })
    document.querySelector("#numpad-6").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-6").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-6").innerHTML
    })
    document.querySelector("#numpad-7").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-7").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-7").innerHTML
    })
    document.querySelector("#numpad-8").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-8").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-8").innerHTML
    })
    document.querySelector("#numpad-9").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-9").innerHTML)
        document.querySelector("#result").innerHTML += document.querySelector("#numpad-9").innerHTML
    })
    document.querySelector("#numpad-add").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-add").innerHTML)
        document.querySelector("#result").innerHTML = ""
    })
    document.querySelector("#numpad-sub").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-sub").innerHTML)
        document.querySelector("#result").innerHTML = ""
    })
    document.querySelector("#numpad-mult").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-mult").innerHTML)
        document.querySelector("#result").innerHTML = ""
    })
    document.querySelector("#numpad-divide").addEventListener("click",() => {
        getNumber(document.querySelector("#numpad-divide").innerHTML)
        document.querySelector("#result").innerHTML = ""
    })
    document.querySelector("#numpad-result").addEventListener("click", () => {
        document.querySelector("#result").innerHTML = Calculate()
    })

    document.querySelector("#numpad-reset").addEventListener("click", () => {
        Reset()
        document.querySelector("#result").innerHTML = ""
    })
})