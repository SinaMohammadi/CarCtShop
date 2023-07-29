export default defineNuxtRouteMiddleware(async (to, form) => {
    const user = useSupabaseUser();
    if (user.value) {
        if (to.path.includes('login')) 
            return navigateTo('/')
        
    } else {
        if (to.path.includes('profile')) 
            return navigateTo('/login')
        
    }


})
