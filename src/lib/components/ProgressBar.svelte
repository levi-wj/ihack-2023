<script>
    export let toComplete;
    export let completed;
    export let color = 'var(--accent-light)';

    let progress = (completed / toComplete) * 100;
</script>

<div class="completed" style="color: {color}">
    {completed} / {toComplete} completed
    <div class="progress" style="border-color: {color}">
        <div class="progress-bar" style="width: {progress}%; background-color: {color}"></div>
    </div>
</div>

<style>
    .progress {
        height: 25px;
        border: 2px solid;
        margin: 0 auto;
        border-radius: .9em;
    }
    .progress-bar {
        border-radius: 2em;
        height: 22px; 
    }
</style>