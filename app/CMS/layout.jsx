import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabaseServer';
import { readUserSession } from '@/lib/supabase/actionsAuth';

export default async function Layout({ children }) {
    const data = await readUserSession();
    const session = data?.sessions;
    const role = data?.roleData[0]?.role;

    if (!session) {
        return redirect('/login');
    }

    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/login');
    };

    return (
        <>
            {session && role === 'superuser' && (
                <>
                    {/* desktop layout */}
                    <section className="hidden min-h-[90vh] sm:flex sm:flex-row">
                        <CMSNavbar signOut={signOut} />
                        {children}
                    </section>
                    {/* mobile desktop */}
                    <section className="sm:hidden flex flex-col w-full">
                        {children}
                    </section>
                </>
            )}

            {session && role === 'admin' && (
                <div>
                    {children}
                </div>
            )}
        </>
    );
}