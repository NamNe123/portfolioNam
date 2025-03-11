import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';

import ecmTextureLarge from '~/assets/ecm-app.jpg';
import ecmTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import ecmTexture from '~/assets/ecm-app.jpg';

import wfTextureLarge from '~/assets/wf-app.jpg';
import wfTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import wfTexture from '~/assets/wf-app.jpg';

import wf1TextureLarge from '~/assets/wf1-app.jpg';
import wf1TexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import wf1Texture from '~/assets/wf1-app.jpg';

import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Hệ thống thông tin hỗ trợ và phát triển vùng đồng bào dân tộc thiểu số Ban dân tộc tỉnh Đắk Nông (01/2024 - 05/2024)"
        description="Giúp Ban Dân tộc tối ưu quản lý chương trình hỗ trợ, giảm 50% thời gian xử lý hồ sơ. "
        buttonText="View project"
        buttonLink="/projects/ban-dan-toc"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary        
        id="project-2"
        //alternate    thêm thuộc tính để chuyển đổi bên hiển thị
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Phần mềm quản lý CSDL ngành Công Thương Cà Mau (8/2023 - 1/2024)"
        description="Giúp ngành Công Thương Cà Mau tối ưu quản lý dữ liệu, nâng cao hiệu suất, bảo mật chặt chẽ, giao diện thân thiện.(Công việc thực hiện tương tự hệ thống thông tin hỗ trợ và phát triển vùng đồng bào dân tộc thiểu số Ban dân tộc tỉnh Đắk Nông)"
        buttonText="View website"
        buttonLink="https://csdlcongthuong.camau.gov.vn/"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 800w, ${gamestackTextureLarge} 1920w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Phần mềm quản lý việc làm Hậu Giang (5/2023 - 8/2023)"
        description="Giúp tối ưu quy trình tuyển dụng, tăng tỷ lệ kết nối doanh nghiệp - người lao động lên 40%"
        buttonText="View website"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />     
      
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Phần mềm Desktop Sign-in system Trung Quốc (05/2024 - 07/2024)"
        description="Tối ưu quy trình điểm danh và chấm công, nâng cao hiệu suất quản lý nhân sự. Hệ thống giúp giám sát ra vào hiệu quả, cải thiện tính minh bạch và tự động hóa trong việc theo dõi giờ làm, ăn trưa, nghỉ trưa.. "
        buttonText="View github"
        buttonLink="/#project-4"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${wfTexture} 800w, ${wfTextureLarge} 1920w`,
              placeholder: wfTexturePlaceholder,
            },
          ],
        }}
      /> 
      
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive	}
        visible={visibleSections.includes(projectFive	.current)}
        index={5}
        title="Phần mềm quản lý đánh thẻ điểm danh PM4 (08/2024 - 09/2024)"
        description="Tối ưu quy trình điểm danh bằng cách đánh thẻ cho nhân sự của các phòng ban"
        buttonText="View github"
        buttonLink="/#project-5"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${wf1Texture} 800w, ${wf1TextureLarge} 1920w`,
              placeholder: wf1TexturePlaceholder,
            },
          ],
        }}
      /> 
      
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Key Premium Shop - Nâng cấp tài khoản Premium"
        description="Key Premium Shop là nền tảng cung cấp dịch vụ nâng cấp tài khoản premium cho nhiều ứng dụng với giá ưu đãi, thanh toán nhanh chóng và an toàn."
        buttonText="View website"
        buttonLink="https://keypremiumshop.com"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${ecmTexture} 800w, ${ecmTextureLarge} 1920w`,
              placeholder: ecmTexturePlaceholder,
            },
          ],
        }}
      />  
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
