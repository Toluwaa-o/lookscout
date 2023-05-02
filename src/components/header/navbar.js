import { NavLink } from "react-router-dom"

export default function header() {
  return (
        <nav>
            <NavLink to='/register' end>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" ><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path></svg>
                </div>

                <p>Account</p>
            </NavLink>

            <svg width="200px" height="50px" viewBox="0 0 300 200">
            <line x1="40" x2="260" y1="100" y2="100" stroke="#5F6D7E50" strokeWidth="10" strokeLinecap="round" strokeDasharray="1, 30"/></svg>


            <NavLink to='personal' >
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                </div>
                
                <p>Personal</p>
            </NavLink>

            <svg width="200px" height="50px" viewBox="0 0 300 200">
            <line x1="40" x2="260" y1="100" y2="100" stroke="#5F6D7E50" strokeWidth="10" strokeLinecap="round" strokeDasharray="1, 30"/></svg>

            <NavLink to ='billing' >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path></svg>
                </div>
                
                <p>Billing</p>
            </NavLink>

            <svg width="200px" height="50px" viewBox="0 0 300 200">
            <line x1="40" x2="260" y1="100" y2="100" stroke="#5F6D7E50" strokeWidth="10" strokeLinecap="round" strokeDasharray="1, 30"/></svg>

            <NavLink to ='/done' >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
                </div>
               
                <p>Done</p>
            </NavLink>
        </nav>
  )
}
