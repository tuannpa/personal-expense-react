import { Container } from "react-bootstrap";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps): React.ReactElement => {
    return (
        <div className="main">
            <Container>{children}</Container>
        </div>
    );
}

export default MainLayout;