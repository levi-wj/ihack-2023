<script>
    export let toComplete;
    export let completed;

    let progress = (completed / toComplete) * 100;
</script>

<div class="completed">
    {completed} / {toComplete} completed
    <div class="progress">
        <div class="progress-bar" style="width: {progress}%;"></div>
    </div>
</div>

<style>
    .completed {
        color: var(--accent-light);
    }
    .progress {
        height: 25px;
        border: 2px solid var(--accent-light);
        margin: 0 auto;
        border-radius: .9em;
    }
    .progress-bar {
        border-radius: 2em;
        height: 22px; 
        background-color: var(--accent-light);
    }
</style>