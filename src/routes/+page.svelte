<script>
    import ProgressBar from "../lib/components/ProgressBar.svelte";
</script>

<main>
    <a href="/async">
        <section>
            <h2>Async/Await Puzzles</h2>
            <p>Test your knowledge of async/await</p>
            <ProgressBar completed=2 toComplete=5 />
        </section>
    </a>
    <a href="/filepath">
        <section>
            <h2>Filepath Puzzles</h2>
            <p>Think you know your way around filepaths?</p>
            <ProgressBar completed=1 toComplete=5 />
        </section>
    </a>
    <a href="/css">
        <section>
            <h2>CSS Selector Puzzles</h2>
            <p>Can you select the right elements with CSS?</p>
            <ProgressBar completed=4 toComplete=5 />
        </section>
    </a>
    <a href="/arrays">
        <section>
            <h2>JS Array Method Puzzles</h2>
            <p>Master JavaScript array methods</p>
            <ProgressBar completed=5 toComplete=5 />
        </section>
    </a>
</main>

<style>

</style>