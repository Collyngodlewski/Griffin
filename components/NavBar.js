import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useSession} from '@supabase/auth-helpers-react'

export default function NavBar() {
    const session = useSession()

 
  return (
    <div className="checkingSession">
        
    <Navbar isCompact isBordered variant="static" >
      <Text hideIn="xs">Griff</Text> 
      <Navbar.Content variant="highlight-rounded">
      {session && ( <Navbar.Link href="Home"> Home </Navbar.Link>)}
        {/* <Navbar.Link href="Home">Home</Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Content>
      {session && ( <Navbar.Link href="Account"> Account </Navbar.Link>)}
      </Navbar.Content>

      {/* {session && ( <Navbar.Link href="Home"> Hello </Navbar.Link>)} */}
    
    </Navbar>
    </div>
  );
}
