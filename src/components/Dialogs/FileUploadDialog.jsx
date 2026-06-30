import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Stack,
  Typography,
  LinearProgress,
  Tooltip,
  Alert,
  useTheme,
} from '@mui/material';
import {
  MdClose,
  MdCloudUpload,
  MdInsertDriveFile,
  MdDelete,
  MdCheckCircle,
} from 'react-icons/md';
import Button from 'components/Button/Button';
import { toast } from 'react-toastify';

const BRAND = '#422AFB';
const BRAND_SOFT = '#EEEAFF';

const ACCEPTED_EXTENSIONS = ['.csv', '.xlsx', '.xls'];
const ACCEPTED_MIME = [
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
const MAX_SIZE_BYTES = 10 * 1024 * 1024;

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const getExtension = (name = '') => {
  const idx = name.lastIndexOf('.');
  return idx === -1 ? '' : name.slice(idx).toLowerCase();
};

const FileUploadDialog = ({
  open,
  onClose,
  onUpload,
  title = 'Upload File',
  description = 'Drag and drop your file here, or browse from your computer.',
  accept = ACCEPTED_EXTENSIONS,
  maxSize = MAX_SIZE_BYTES,
}) => {
  const theme = useTheme();
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const acceptAttr = useMemo(
    () => [...accept, ...ACCEPTED_MIME].join(','),
    [accept],
  );

  const resetState = useCallback(() => {
    setFile(null);
    setError('');
    setIsDragging(false);
    setUploading(false);
    setProgress(0);
    setSuccess(false);
    if (inputRef.current) inputRef.current.value = '';
  }, []);

  const validateFile = useCallback(
    (candidate) => {
      if (!candidate) return 'No file selected.';
      const ext = getExtension(candidate.name);
      if (!accept.includes(ext)) {
        return `Unsupported file type. Allowed: ${accept.join(', ')}`;
      }
      if (candidate.size > maxSize) {
        return `File is too large. Max size is ${formatBytes(maxSize)}.`;
      }
      return '';
    },
    [accept, maxSize],
  );

  const handleFiles = useCallback(
    (fileList) => {
      const next = fileList && fileList[0];
      if (!next) return;
      const validationError = validateFile(next);
      if (validationError) {
        setError(validationError);
        toast.error(validationError);
        setFile(null);
        return;
      }
      setError('');
      setFile(next);
    },
    [validateFile],
  );

  const handleInputChange = (e) => handleFiles(e.target.files);

  const handleBrowse = () => inputRef.current?.click();

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleRemove = () => {
    setFile(null);
    setError('');
    setProgress(0);
    setSuccess(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setProgress(0);
    setSuccess(false);
    try {
      if (typeof onUpload === 'function') {
        await onUpload(file, (pct) => setProgress(pct));
        setProgress(100);
      } else {
        await new Promise((resolve) => {
          let pct = 0;
          const interval = setInterval(() => {
            pct += 10;
            setProgress(Math.min(pct, 100));
            if (pct >= 100) {
              clearInterval(interval);
              resolve();
            }
          }, 120);
        });
      }
      setSuccess(true);
      toast.success('File uploaded successfully.');
      setTimeout(() => {
        setUploading(false);
        handleDismiss();
      }, 600);
    } catch (err) {
      setUploading(false);
      setError(err?.message || 'Upload failed. Please try again.');
      toast.error('Upload failed. Please try again.');
    }
  };

  const handleDismiss = useCallback(() => {
    resetState();
    onClose?.();
  }, [resetState, onClose]);

  const handleClose = (_, reason) => {
    if (uploading && reason === 'backdropClick') return;
    handleDismiss();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          pt: 3,
          pb: 1,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '12px',
              backgroundColor: BRAND_SOFT,
              color: BRAND,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
            }}
          >
            <MdCloudUpload />
          </Box>
          <Box>
            <Typography sx={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
              Max {formatBytes(maxSize)} &middot; {accept.join(', ')}
            </Typography>
          </Box>
        </Stack>
        <IconButton
        onClick={handleDismiss}
          disabled={uploading}
          size="small"
          sx={{ color: 'text.secondary' }}
        >
          <MdClose />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 1 }}>
        <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 2 }}>
          {description}
        </Typography>

        <input
          ref={inputRef}
          type="file"
          accept={acceptAttr}
          hidden
          onChange={handleInputChange}
        />

        {!file && (
          <Box
            role="button"
            tabIndex={0}
            onClick={handleBrowse}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBrowse();
              }
            }}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            sx={{
              cursor: 'pointer',
              border: '2px dashed',
              borderColor: isDragging ? BRAND : 'rgba(0,0,0,0.15)',
              backgroundColor: isDragging
                ? 'gray.100'
                : theme.palette.background.paper,
              borderRadius: '16px',
              px: 3,
              py: 5,
              textAlign: 'center',
              transition: 'all 0.2s ease',
              outline: 'none',
              '&:hover': {
                borderColor: BRAND,
              },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: 'white',
                color: BRAND,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                mb: 1.5,
                boxShadow: '0 4px 12px rgba(66, 42, 251, 0.15)',
              }}
            >
              <MdCloudUpload />
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
              {isDragging
                ? 'Drop your file to upload'
                : 'Click to browse or drag & drop'}
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
              Supported formats: {accept.join(', ')}
            </Typography>
            {/* <Stack
              direction="row"
              spacing={0.75}
              justifyContent="center"
              sx={{ mt: 1.5 }}
            >
              {accept.map((ext) => (
                <Chip
                  key={ext}
                  label={ext.replace('.', '').toUpperCase()}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 10,
                    fontWeight: 600,
                    backgroundColor: 'white',
                    border: '1px solid rgba(0,0,0,0.08)',
                    color: 'red',
                  }}
                />
              ))}
            </Stack> */}
          </Box>
        )}

        {file && (
          <Box
            sx={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '16px',
              p: 2,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: theme.palette.background.paper,
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                <MdInsertDriveFile />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Tooltip title={file.name} placement="top">
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {file.name}
                  </Typography>
                </Tooltip>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  {formatBytes(file.size)}
                  {getExtension(file.name) &&
                    ` · ${getExtension(file.name).replace('.', '').toUpperCase()}`}
                </Typography>
              </Box>
              {success ? (
                <Box
                  sx={{ color: 'success.main', display: 'flex', fontSize: 22 }}
                >
                  <MdCheckCircle />
                </Box>
              ) : (
                <IconButton
                  onClick={handleRemove}
                  disabled={uploading}
                  size="small"
                  sx={{ color: 'text.secondary' }}
                >
                  <MdDelete />
                </IconButton>
              )}
            </Stack>

            {(uploading || success) && (
              <Box sx={{ mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0,0,0,0.06)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: success ? '#2E7D32' : BRAND,
                      borderRadius: 3,
                    },
                  }}
                />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mt: 0.75 }}
                >
                  <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>
                    {success ? 'Upload complete' : 'Uploading...'}
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>
                    {progress}%
                  </Typography>
                </Stack>
              </Box>
            )}
          </Box>
        )}


        {error && (
          <Alert
            severity="error"
            sx={{ mt: 2, borderRadius: '12px', fontSize: 12 }}
          >
            {error}
          </Alert>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, pt: 2, gap: 1 }}>
        <Button
        onClick={handleDismiss}
          disabled={uploading}
          variant="outlined"
          startIcon={<MdClose />}
        >
          Cancel
        </Button>

        <Button
          onClick={handleUpload}
          disabled={!file || uploading || !!error}
          variant="contained"
          startIcon={<MdCloudUpload />}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FileUploadDialog;
