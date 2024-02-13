import React from 'react';
import { SkillProps } from './Skills.types';

const Skills = (props: SkillProps) => {
  const { skills } = props;
  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
