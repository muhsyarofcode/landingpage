import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy } from "react";
import '../../globalStyle/globalStyle.css'
export const ProjectsLazy = lazy(()=> import('../../components/projects/projects'));
export const NavbarLazy = lazy(()=> import('../../components/navbar/navbar'));
export const HomeLazy = lazy(()=> import('../../components/home/home'));
export const ServiceLazy = lazy(()=> import('../../components/service/service'));
export const SkillsLazy = lazy(()=> import('../../components/skills/skills'));
export const GaleriLazy = lazy(()=> import('../../components/galeri/galeri'));
export const FooterLazy = lazy(()=> import('../../components/footer/footer'));

function Landing() {

  return (
    <div className="landingpage">
          <NavbarLazy/>
          <HomeLazy/>
          <ProjectsLazy/>
          <SkillsLazy/>
          <ServiceLazy/>
          <GaleriLazy/>
          <FooterLazy/>
    </div>
  );
}

export default Landing;
