<script>
    export let realDOMRoot = null;

    let lastSelectedEle = null;
    
    function changeInput(e) {
        let value = e.target.value;
        let foundEle = null;

        try {
            foundEle = realDOMRoot.querySelector(value);
        } catch (e) {
            console.log(e);
        }

        if (lastSelectedEle) {
            lastSelectedEle.dataset.selected = false;                
        }

        if (foundEle) {
            foundEle.dataset.selected = true;
            lastSelectedEle = foundEle;
        }
    }
</script>

<input on:input={changeInput} placeholder="Type CSS Selector Here"/>

<style>
    input {
        padding: 1em;
        background-color: transparent;
        width: 100%;
        height: 100%;
        border: 1px solid gray;
        color: var(--background);
    }
</style>