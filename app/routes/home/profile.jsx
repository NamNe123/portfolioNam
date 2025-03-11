import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Chào bạn" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Xin chào, tôi là Nguyễn Phạm Hải Nam, một Nhà phát triển .NET Full-Stack tại <Link href="https://giaiphapdientu.vn/">   Công ty cổ phần tin học Tri Thức  </Link>     
       ở Thành phố Hồ Chí Minh với hơn một năm kinh nghiệm, tôi chuyên phát triển các hệ thống quản lý doanh 
      nghiệp và chính phủ bằng .NET Core, C#, React.js và SQL Server. Công việc của tôi bao gồm phát triển 
      phần phụ trợ, tích hợp API và tối ưu hóa UI/UX. Việc quen thuộc với cả công nghệ phần giao diện người 
      dùng và phần phụ trợ cho phép tôi xây dựng các ứng dụng liền mạch và có thể mở rộng.
      
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Một số dự án đáng chú ý của tôi bao gồm hệ thống quản lý việc làm, nền tảng quản trị cơ sở dữ liệu 
      và các giải pháp chuyển đổi số cho nhiều cơ quan chính phủ khác nhau. Nếu bạn quan tâm đến các công 
      cụ và phần mềm tôi sử dụng, hãy xem <Link href="/uses">trang sử dụng của tôi.</Link>      
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Trong thời gian rảnh rỗi, tôi thích học các ngôn ngữ lập trình mới, khám phá các ứng dụng AI và cải 
      thiện kỹ năng giải quyết vấn đề của mình. Tôi luôn hào hứng khi nghe về các cơ hội và sự hợp tác mới, 
      vì vậy hãy thoải mái liên hệ với tôi!
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Liên hệ với tôi!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Tôi
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                {/* <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
