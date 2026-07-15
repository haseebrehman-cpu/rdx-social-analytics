import { FormControl, Select, MenuItem, Box } from '@mui/material';

const DropdownField = ({ value, onChange, options, labelId, id }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderRadius: '8px',
          width: 'fit-content',
          alignItems: 'center',
        }}
      >
        <FormControl fullWidth>
          <Select
            size="small"
            labelId={labelId}
            id={id}
            value={value}
            onChange={onChange}
            sx={{ borderRadius: '8px'}}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default DropdownField;
