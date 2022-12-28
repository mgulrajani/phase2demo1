import { RepeatPipe } from './repeat.pipe';

describe('RepeatPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should repeat 2 times',()=>{

    //Arrange
    const pipe= new RepeatPipe();
    //Act
    const data = pipe.transform('mm',2);

    //Assert
    expect(data).toEqual('mmmm');
  });
});
