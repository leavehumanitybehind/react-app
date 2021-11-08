import { ChatWrapper, MainWrapper } from "./.styledComponents"
import Chat from "./Chat"
import Quiz from "./Quiz"

const Main = () => {
    return (
        <MainWrapper> 
            <Quiz />
            <ChatWrapper>
                <Chat />
            </ChatWrapper>
            
           
        </MainWrapper>
    )
}
export default Main