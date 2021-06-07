import React from 'react';
import { loadState } from '../../helpers/localStorage';
import AddButton from './AddButton';
import ConnectionCallCTA from './ConnectionCallCTA';
import FreeBirthSupport from './FreeBirthSupport';
import HomeBirthDoulaSupport from './HomeBirthDoulaSupport';
import TopBirthImages from './TopBirthImages';
import useVisualMode from '../../hooks/useVisualMode'
import TinyMCEEditor from '../TinyMCEEditor';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const FreeBirthOffering = () => {
    const state = loadState()
    const { mode, transition, back } = useVisualMode(SHOW);

    const onAddClicked = () => {
        transition(CREATE)
      }

      const isLoggedIn = state.isLoggedIn;
      console.log('state in free offering index: ', isLoggedIn, mode);

  return (
    <div>
      <TopBirthImages />
      <ConnectionCallCTA />
      <FreeBirthSupport />
      <HomeBirthDoulaSupport />
      
      {isLoggedIn && mode === 'SHOW' && (
        <AddButton onAddClicked={onAddClicked}  />
      )}

      {isLoggedIn && mode === 'CREATE' && (
        <TinyMCEEditor />
      )}

    
    </div>
  );
};

export default FreeBirthOffering;