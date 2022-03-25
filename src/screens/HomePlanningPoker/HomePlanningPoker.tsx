import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

export const HomePlanningPoker = () => {
  const navigate = useNavigate();
  const styles = useStyles();
  return (
    <div>
      <div className={styles.HeaderText}>
        Real-time planning poker for remote scrum teams
      </div>
      <button className={styles.JoinButton} onClick={() => navigate('/join')}>
        Start Planning
      </button>
    </div>
  );
};
