export default defineNuxtRouteMiddleware(async (to, form) => {
    const user = useSupabaseUser();
    console.log(user.value);
    if (user.value) {
        if (to.path.includes('login')) 
            return navigateTo('/')
        
    } else {
        if (to.path.includes('profile')) 
            return navigateTo('/login')
        
    }


})
