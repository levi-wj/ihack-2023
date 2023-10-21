<script>
    import Puzzle from "../../lib/components/Puzzle.svelte";
    import Level1 from "./levels/Level1.svelte";
    import Level2 from "./levels/Level2.svelte";
    import Level3 from "./levels/Level3.svelte";
    import Level4 from "./levels/Level4.svelte";
    import Level5 from "./levels/Level5.svelte";
    
    const levels = [
        { title: 'Level 1: Absolute path', component: Level1}, 
        { title: 'Level 2: Relative path', component: Level2},
        { title: 'Level 3: Parent/child directories', component: Level3},
        { title: 'Level 4: Find an image file', component: Level4},
        { title: 'Level 5: Link a css file', component: Level5},
    ];
</script>

<Puzzle {levels} title="File path"/>