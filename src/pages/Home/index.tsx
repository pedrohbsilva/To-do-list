import React, { useState } from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [row, setRow] = useState<string[]>([]);
  const handleClick = (): void => {
    if (inputValue !== '') {
      setRow((oldArray) => [...oldArray, inputValue]);
      setInputValue('');
    } else {
      alert('Type any information in input');
    }
  };

  return (
    <div style={{ margin: '10px auto', width: '90%' }}>
      <h1>To do list</h1>
      <InputGroup size="md" data-testid="input-add-task">
        <Input
          data-testid="teste"
          pr="4.5rem"
          type="text"
          placeholder="add task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <InputRightElement width="4rem">
          <Button
            style={{ background: 'lightgreen', color: 'white' }}
            onClick={handleClick}
            data-testid="button-add-task"
          >
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={{ fontSize: 24 }}>Tasks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {row.map((item, index) => (
            <Tr key={`${item + index}`} data-testid="list-row">
              <Td>{item}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Home;
