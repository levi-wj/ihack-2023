<script>
	import ProgressBar from "./ProgressBar.svelte";

</script>
<a href="/"><h1>webWiz</h1></a>
<nav>
    <ul>
        <li>
            <ProgressBar completed={1} toComplete={15} />
        </li>
    </ul>
</nav>

<style>

    h1 {
        color: var(--background);
        font-weight: var(--font-bold);
    }

    nav > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    nav > ul > li {
        margin-left: 1em;
        width: 15em;
    }
</style>