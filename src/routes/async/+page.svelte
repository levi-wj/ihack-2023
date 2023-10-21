<script>
    import Level1 from "./levels/Level1.svelte";
    import Level2 from "./levels/Level2.svelte";
    import Level3 from "./levels/Level3.svelte";
    import Level4 from "./levels/Level4.svelte";
    import Level5 from "./levels/Level5.svelte";
    import LevelPicker from "../../lib/components/LevelPicker.svelte";
    import NextButton from "../../lib/components/NextButton.svelte";
    
    const levels = [
        { title: 'Level 1: Get data from API', component: Level1}, 
        { title: 'Level 2: Get data from API 2', component: Level2},
        { title: 'Level 3: Data from multiple sources', component: Level3},
        { title: 'Level 4: Async in loops', component: Level4},
        { title: 'Level 5: Convert promises to async', component: Level5},
    ];

    let curLevel = 0;
    let isLevelComplete = false;
    
    function setCurLevel(level) {
        curLevel = level;
    }

    function completeLevel() {
        isLevelComplete = true;
    }

    function nextLevel() {
        curLevel ++;
        isLevelComplete = false;
    }
</script>

<h2>Async/await puzzles</h2>
<LevelPicker {levels} {setCurLevel} {curLevel}></LevelPicker>
<svelte:component this={levels[curLevel].component} {completeLevel} />

{#if isLevelComplete}
    <NextButton {nextLevel} />
{/if}