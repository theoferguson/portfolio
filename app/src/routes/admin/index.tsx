import { component$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignin } from "../plugin@auth";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
    const signIn = useAuthSignin();
    const session = useAuthSession();
    return <>
        <Form action={signIn}>
            <input type="hidden" name="providerId" value="github" />
            <input type="hidden" name="options.callbackUrl" value="http://qwik-auth-example.com/dashboard" />
            <button>Sign In</button>
        </Form>
        <p>{session.value?.user?.email}</p>
    </>;
}
);