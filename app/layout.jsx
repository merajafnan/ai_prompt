import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "ai_prompt",
    description: 'Discover And Share AI Prompt'
} 

const RootLayout = ({children}) => {
    return(
    <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'/>
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}



export default RootLayout; 