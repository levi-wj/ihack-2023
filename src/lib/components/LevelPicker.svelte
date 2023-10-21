<script>
    export let levels = [];
    export let setCurLevel;
</script>

<select on:change={e => setCurLevel(e.target.value) }>
    {#each levels as level, i}
        <option value={i}>{level.title}</option>
    {/each}
</select>