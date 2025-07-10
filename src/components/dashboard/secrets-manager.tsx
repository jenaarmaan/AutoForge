import { KeyRound, Shield, Trash2, Pencil, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const secrets = [
  { name: 'AWS_HOST', value: 'ec2-user@xx.xxx.xx.xx' },
  { name: 'EC2_USERNAME', value: 'ec2-user' },
  { name: 'PRIVATE_KEY', value: '-----BEGIN RSA PRIVATE KEY-----...'},
];

export function SecretsManager() {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Secrets Management
          </CardTitle>
          <CardDescription className="mt-2">
            Securely store credentials for your pipeline.
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" disabled>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Secret Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {secrets.map((secret) => (
              <TableRow key={secret.name}>
                <TableCell className="font-medium flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-muted-foreground" />
                  <div>
                    {secret.name}
                    <div className="font-mono text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">
                      ********************
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <TooltipProvider>
                    <div className="flex justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" disabled>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit Secret (disabled)</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" disabled>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete Secret (disabled)</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
