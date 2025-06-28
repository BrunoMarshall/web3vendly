import QRCode from 'qrcode.react';

function QRCodeScanner({ machineAddress }) {
  return (
    <div className="text-center">
      <p className="mb-2">Scan to pay to vending machine</p>
      <QRCode value={machineAddress} size={200} />
      <p className="mt-2 text-sm">Machine Address: {machineAddress}</p>
    </h2>
  );
}

export default QRCodeScanner;
