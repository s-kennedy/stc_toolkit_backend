export const emptyContentItems = {
  paragraph: { 'type': 'paragraph', 'text': 'Paragraph placeholder text' },
  header: { 'type': 'header', 'text': 'Header placeholder text' },
  image: { 'type': 'image', 'source': 'Placeholder image', 'caption': 'Placeholder image'},
  section: { 'type': 'section', content: [] },
  button: { 'type': 'button', 'link': '/', 'anchor': 'Placeholder' },
  action: { 'type': 'action', 'link': '/', 'anchor': 'Placeholder' },
  call_to_action: { 'type': 'call_to_action', content: [] }
};

export const API_URL = 'https://toolkit.sharonkennedy.ca';

export const PAGE_TYPES = [
  { label: 'About', value: 'about' },
  { label: 'Building Block', value: 'building_block' },
  { label: 'Action', value: 'action' },
  { label: 'Tool', value: 'tool' },
  { label: 'Case Study', value: 'case_study' },
  { label: 'Reference', value: 'reference' },
]