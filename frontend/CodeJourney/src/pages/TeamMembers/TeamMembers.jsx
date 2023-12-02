import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Header/Navs/NavLinkEquipo";
import "./TeamMembers.css"

export const TeamMembers = () => {
    return (
      <>
      <Header navlink={<NavLinkEquipo/>}/>
      <main>
        <div className="container__pollitos">
          <div className="pollitos">
            <p>🐣</p>
          </div>
          <div className="pollitos">
            <p>🐣</p>
          </div>
          <div className="pollitos">
            <p>🐣</p>
          </div>
          <div className="pollitos">
            <p>🐣</p>
          </div>
          <div className="pollitos">
            <p>🐣</p>
          </div>
        </div>
      </main>
      </>
      
    );
  };
  