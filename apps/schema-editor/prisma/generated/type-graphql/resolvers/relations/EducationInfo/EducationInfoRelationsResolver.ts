import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Career } from "../../../models/Career";
import { EducationInfo } from "../../../models/EducationInfo";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class EducationInfoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() educationInfo: EducationInfo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUniqueOrThrow({
      where: {
        id: educationInfo.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Career, {
    nullable: false
  })
  async career(@TypeGraphQL.Root() educationInfo: EducationInfo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Career> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUniqueOrThrow({
      where: {
        id: educationInfo.id,
      },
    }).career({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
