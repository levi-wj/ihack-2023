<script>
    export let nextLevel;
</script>

<div>
    <button class="next-button" on:click={nextLevel}>Next</button>
</div>

<style>
    div {
        text-align: right;
    }
    button {
        background-color: var(--primary);
        border: none;
        border-bottom: 3px solid var(--primary-shadow);
        border-radius: 10px;
        margin: 1em;
        padding: .5em 1em;
        font-size: 1.2em;
        color: var(--background);
    }
</style>