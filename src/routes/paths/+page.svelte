<script>
    import Level1 from "./levels/Level1.svelte";
    import Level2 from "./levels/Level2.svelte";
    import Level3 from "./levels/Level3.svelte";
    import Level4 from "./levels/Level4.svelte";
    import Level5 from "./levels/Level5.svelte";
    import LevelPicker from "../../lib/components/LevelPicker.svelte";
    
    const levels = [
        { title: 'Level 1: Absolute path', component: Level1}, 
        { title: 'Level 2: Relative path', component: Level2},
        { title: 'Level 3: Parent/child directories', component: Level3},
        { title: 'Level 4: Find an image file', component: Level4},
        { title: 'Level 5: Link a css file', component: Level5},
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
    }
</script>

<h2>File path puzzles</h2>
<LevelPicker {levels} {setCurLevel} {curLevel}></LevelPicker>
<svelte:component this={levels[curLevel].component} {completeLevel} />

{#if isLevelComplete}
    <NextButton {nextLevel} />
{/if}