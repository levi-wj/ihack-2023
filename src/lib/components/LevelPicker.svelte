<script>
    export let levels = [];
    export let setCurLevel;
    export let curLevel;
</script>

<select on:change={e => setCurLevel(e.target.value) }>
    {#each levels as level, i}
        {#if i === curLevel}
            <option value={i} selected>{level.title}</option>
        {:else}
            <option value={i}>{level.title}</option>
        {/if}
    {/each}
</select>

<style>
    select{
        border: none;
        border-radius: 14px;
        padding: 1em;
        margin: 1em;
        margin-left: 0;
        background-color: var(--secondary-dark);
    }
</style>