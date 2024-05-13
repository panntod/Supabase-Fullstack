import { Button } from '@/components/ui/button'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function SignOut() {

    const handleLogout = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut()
        return redirect("/auth")
    }
    return (
        <form action={handleLogout}>
            <Button>SignOut</Button>
        </form>
    )
}