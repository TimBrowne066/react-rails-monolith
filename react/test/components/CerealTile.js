import CerealTile from '../../src/components/CerealTile';
describe('CerealTile', () => {
  let name,
      wrapper;
  beforeEach(() => {
    wrapper = mount(
      <CerealTile
        name="Cinnamon Toast Crunch"
      />
    );
  });
  it('should render an link tag', () => {
    expect(wrapper.find('h5')).toBePresent();
  });
  it('should render an h1 tag with the name property value', () => {
    expect(wrapper.find('h5').text()).toBe('Cinnamon Toast Crunch');
  });
});
