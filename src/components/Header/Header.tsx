import "./Header.css";

interface IHeader {
  employeeCount: number;
}

export const Header: React.FC<IHeader> = ({ employeeCount }) => {
  return (
    <div className="header">
      <h1>Employee:</h1>
      <h2 className="count">{employeeCount}</h2>
    </div>
  );
};
