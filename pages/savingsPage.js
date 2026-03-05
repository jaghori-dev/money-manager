import Savings from "@/components/Savings/Savings";
import { Container } from ".";

export default function SavingPage({transactions}){
 return (
    <Container>
    <p>savings goals</p>
    <Savings transactions={transactions}/>
    </Container>
 )
}