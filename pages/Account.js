import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Account from '@/components/Account';
import Layout from '@/components/Layout';





const AccountPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Layout>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
    theme='dark'
  />
  ) : (
    <Account  session={session} />
  )}
</div>
</Layout>
)
}


export default AccountPage