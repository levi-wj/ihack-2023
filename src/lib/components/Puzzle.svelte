<script>
    import { Confetti } from 'svelte-confetti'
    import LevelPicker from "../../lib/components/LevelPicker.svelte";
    import NextButton from "../../lib/components/NextButton.svelte";
    
    export let levels = [];
    export let title = "Async/await";

    let curLevel = 0;
    let confetti;
    let isLevelComplete = false;
    
    function setCurLevel(level) {
        curLevel = level;
    }

    function completeLevel() {
        isLevelComplete = true;
        new Confetti({
            props: {
                delay: [500, 2000],
                amount: 800,
                relative: false,
                x: [-5, 5],
                y: [0, .1],
                fallDistance: "100vh",
            },
            target: confetti,
        });
    }

    function nextLevel() {
        curLevel ++;
        isLevelComplete = false;
    }
</script>

<div bind:this={confetti} class="confetti"></div>

<div class="flex">
    <div class="headergroup">
        <h2>{title} puzzles</h2>
        <LevelPicker {levels} {setCurLevel} {curLevel}></LevelPicker>
    </div>
    {#if isLevelComplete}
        <NextButton {nextLevel} />
    {/if}
</div>

<svelte:component this={levels[curLevel].component} {completeLevel} />

<style>
    .flex {
        display: flex;
        margin: 1em;
        margin-bottom: .25em;
        justify-content: space-between;
        align-items: center;
    }
    
    .headergroup {
        display: flex;
        align-items: center;
    }
    
    h2 {
        margin-right: 1.75em;
    }
    
    .confetti {
        position: fixed;
        top: -50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        overflow: hidden;       
        pointer-events: none;
    }
</style>