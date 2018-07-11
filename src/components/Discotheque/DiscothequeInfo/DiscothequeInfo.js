import React, { Component } from 'react';
import Capacity from '../../../containers/Capacity'

import { Wrapper, Title, Description } from './DiscothequeInfo_styles';

class DiscothequeInfo extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Mighty Ducks disco</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem orci, dictum eu aliquet eget, fermentum ut nibh. Ut ullamcorper tortor ac magna venenatis suscipit. Donec bibendum varius dolor vitae placerat. Nullam ut leo dapibus, laoreet ante ut, semper tellus. Nunc malesuada bibendum tortor non hendrerit. Mauris id est viverra mauris pulvinar ultricies. Etiam blandit, tortor suscipit condimentum sodales, elit quam elementum elit, in convallis lorem ex eu neque. Aenean mattis est quis nisl fermentum, a placerat eros facilisis. Ut gravida aliquam nisi, eget feugiat tortor scelerisque vitae. Mauris vitae scelerisque lectus. Etiam mollis a nibh ut porttitor. Praesent ornare, urna sit amet consequat pulvinar, odio turpis tristique lacus, vel elementum ante est id mi. Pellentesque vitae ultricies felis, a imperdiet mauris.</Description>
        <Capacity />
      </Wrapper>
    )
  }
}

export default DiscothequeInfo;