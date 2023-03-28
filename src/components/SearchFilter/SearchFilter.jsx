import PropTypes from 'prop-types';

import { FilterDiv,FilterLabel,FilterInput,Label } from './SearchFilter.styled';

const SearchFilter = ({OnChangeFilter, valueFilter}) => {

	return(
		<Label>
		<h2>Contacts</h2>
		<FilterDiv>

		<FilterLabel >Find contacts by name
		<FilterInput
		  type="text"
		  name="name"
		  onInput={OnChangeFilter}
		  value={valueFilter}
		  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
		  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
		  required
		/>
		</FilterLabel>
	  </FilterDiv>
	  </Label>
	)
}

SearchFilter.propTypes = {
	OnChangeFilter: PropTypes.func.isRequired,
	valueFilter:PropTypes.string.isRequired
  };

export default SearchFilter