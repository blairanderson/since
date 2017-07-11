import KeenTracking from 'keen-tracking';

// Configure a client instance
const client = new KeenTracking({
  projectId: '5964483dc9e77c000128d62b',
  writeKey:
    'F711BA1C45CC6B1FA1A1BA1DB0951F51A37F541E93E6907D956262E980C82E0E8A40C2346C533AD8AE9554B1F0393D3BA9F4A0582B866BFAD2CD88CEB6B19B4BE00E956B639C95F0FF8964622FC6FAD005B8BF61D0FA9A220158EF3450D58939'
});

export const logEvent = ({ date, format }) => {
  if (date) {
    client.recordEvent('since', { title: `Days Since ${date}`, since: date });
  } else {
    client.recordEvent('rootpage', { title: document.title });
  }
};
