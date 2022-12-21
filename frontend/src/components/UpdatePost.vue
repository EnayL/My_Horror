<template>
    <div>
        <h1>Update Post</h1>
        <form>
            <div class="titleSection">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter title">
            </div>
            <div class="contentSection">
                <label for="content">Content</label>
                <input type="text" class="form-control" id="content" placeholder="Enter content">
            </div>
            <div class="genreSection">
                <label for="genre">Genre</label>
                <input type="text" class="form-control" id="genre" placeholder="Enter genre">
            </div>
            <button type="submit" class="btn btn-primary">Mettre a jour</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "UpdatePost",
    }
</script>

<style scoped>

</style>