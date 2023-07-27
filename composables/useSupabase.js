export const auth = () => {
    const supabase = useSupabaseAuthClient();
    const user = useState('user', () => null)
    supabase.auth.onAuthStateChange((e, session) => {
        user.value =  session?.user || null;

    });

    const signIn = async ({email, password}) => {
        const {user: u, error} = await supabase.auth.signInWithPassword({email, password});
        if (error) 
            throw error


        


        navigateTo('/profile/listings')
        return u;
    };
    const signUp = async ({email, password}) => {
        const {user: u, error} = await supabase.auth.signUp({email, password});
        return u;
    };
    const signOut = async () => {
        const {user: u, error} = await supabase.auth.signOut();
        navigateTo('/login')
        return u;
    }
    const isLoggedIn = () => {
        return !! user.value;
    };

    return {
        user,
        signIn,
        signUp,
        signOut,
        isLoggedIn : isLoggedIn()
    }
}
