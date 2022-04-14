<template>
 <router-link to='/register'></router-link>
<div class="container">
    <div class="center">
    <h1>Registre-se</h1>
    <form method="post">
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Username</label>
        </div>
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Password</label>
        </div>
        <input type="submit" value="Login">
        <input type="submit" value="Register">
    </form>
</div>
</div>
</template>

<script>
export default {
    name: 'RegisterView'
}
</script>

<style scoped>

</style>