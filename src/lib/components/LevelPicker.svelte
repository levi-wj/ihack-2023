<script>
    export let levels = [];
    export let setCurLevel;
</script>

<select on:change={e => setCurLevel(e.target.value) }>
    {#each levels as level, i}
        <option value={i}>{level.title}</option>
    {/each}
</select>

<style>
    select{
        border: none;
        border-radius: 0 1em 1em 0;
        padding: 1em;
        margin: 1em;
        margin-left: 0;
        background-color: var(--secondary-dark);
    }
</style>