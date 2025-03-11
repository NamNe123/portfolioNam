import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Công cụ tôi sử dụng"
          description="Danh sách khá đầy đủ các công cụ, ứng dụng, phần cứng và nhiều thứ khác mà tôi sử dụng hàng ngày để thiết kế và lập trình."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Ngôn ngữ & Công nghệ phát triển</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Ngôn ngữ lập trình: C#, JavaScript, TypeScript.                   
                  </ListItem>
                  <ListItem>
                    Backend: .NET Core, ASP.NET MVC, Web API, Entity Framework, LINQ.              
                  </ListItem>
                  <ListItem>
                    Frontend: React.js, HTML, CSS, Bootstrap.               
                  </ListItem>
                  <ListItem>
                    Desktop: Windows Forms (WinForms), WPF.              
                  </ListItem>
                  <ListItem>
                    Cơ sở dữ liệu: SQL, T-SQL (SQL Server), PL/SQL (MySQL).        
                  </ListItem>
                  <ListItem>
                    Tích hợp & API: RESTful API, GraphQL, JSON, XML.          
                  </ListItem>                  
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Công cụ & Môi trường làm việc</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Phần mềm lập trình & Trình soạn thảo mã nguồn: Visual Studio, Visual Studio Code.
                  </ListItem>
                  <ListItem>
                    Quản lý mã nguồn: Git, GitHub, GitLab.
                  </ListItem>
                  <ListItem>
                    Quản lý cơ sở dữ liệu: SQL Server, MySQL.
                  </ListItem>
                  <ListItem>
                    Môi trường làm việc: Windows.
                  </ListItem>                  
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (by the way)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </>
  );
};
